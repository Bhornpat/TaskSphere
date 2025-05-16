'use client'

import { useEffect, useState } from 'react'

interface Task {
	id: number
	title: string
	description: string
	due_date: string
	status: string
}

export default function Dashboard() {
	const [tasks, setTasks] = useState<Task[]>([])
	const [error, setError] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [newTask, setNewTask] = useState({ title: '', description: '', due_date: '' })
	const [editModalTask, setEditModalTask] = useState<Task | null>(null)
	const [editForm, setEditForm] = useState({ title: '', description: '', due_date: '' })

	useEffect(() => {
		const fetchTasks = async () => {
			const token = localStorage.getItem('token')
			if (!token) {
				setError('User not authenticated')
				return
			}

			try {
				const res = await fetch('http://192.168.137.50:8000/tasks', {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})

				if (!res.ok) {
					throw new Error('Failed to fetch tasks')
				}

				const data = await res.json()
				setTasks(data)
			} catch (err: any) {
				setError(err.message || 'Something went wrong')
			}
		}

		fetchTasks()
	}, [])

	const handleAddTask = async () => {
		const token = localStorage.getItem('token')
		if (!token) return

		try {
			const res = await fetch('http://192.168.137.50:8000/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(newTask),
			})

			if (!res.ok) throw new Error('Failed to create task')

			const created = await res.json()
			setTasks(prev => [...prev, created])
			setShowModal(false)
			setNewTask({ title: '', description: '', due_date: '' })
		} catch (err) {
			console.error('Failed to add task:', err)
		}
	}

	return (
		<div className="p-6">
			<h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Your Tasks</h1>

			{error && <p className="text-red-500 mb-4 text-center">{error}</p>}

			<button
				onClick={() => setShowModal(true)}
				className="text-md mr-3 mb-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
			>
				+ Add Task
			</button>

			<div className="space-y-4">
				{tasks.map(task => (
					<div key={task.id}
						className={`p-5 rounded border flex justify-between items-center ${task.status === 'done' ? 'bg-green-100' : 'bg-yellow-50'}`}
					>
						<div>
							<p className="font-bold text-lg text-gray-700">{task.title}</p>
							<p className="text-sm text-gray-600">{task.description}</p>
							<p className="mt-1 text-xs text-gray-500">Due: {task.due_date}</p>


							<button
								onClick={() => {
									setEditModalTask(task)
									setEditForm({
										title: task.title,
										description: task.description,
										due_date: task.due_date.split('T')[0],
									})
								}}
								className="mt-3 px-3 py-1 bg-green-600 text-white text-xs font-medium rounded hover:bg-green-700 transition duration-150"
							>
								Edit
							</button>

							<button
								onClick={async () => {
									const token = localStorage.getItem('token')
									const confirmed = confirm('Are you sure you want to delete this task?')
									if (!confirmed || !token) return

									const res = await fetch(`http://192.168.137.50:8000/tasks/${task.id}`, {
										method: 'DELETE',
										headers: {
											Authorization: `Bearer ${token}`,
										},
									})

									if (res.ok) {
										setTasks(prev => prev.filter(t => t.id !== task.id))
									} else {
										alert('Failed to delete task')
									}
								}}
								className="mt-3 ml-2 px-3 py-1 bg-red-600 text-white text-xs font-medium rounded hover:bg-red-700 transition duration-150"
							>
								Delete
							</button>
						</div>

						<span className={`text-sm px-2 py-1 rounded font-medium ${task.status === 'done' ? 'bg-green-600 text-white' : 'bg-yellow-400 text-black'}`}>{task.status === 'done' ? 'Done' : 'Pending'}</span>
					</div>
				))}
			</div>

			{/* Modal Add task */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
					<div className="bg-white p-6 rounded shadow w-full max-w-md">
						<h2 className="text-xl font-bold mb-4">Add New Task</h2>

						<div className="space-y-4">
							<input
								type="text"
								placeholder="Title"
								value={newTask.title}
								onChange={e => setNewTask({ ...newTask, title: e.target.value })}
								className="w-full p-2 border rounded"
							/>
							<input
								type="text"
								placeholder="Description"
								value={newTask.description}
								onChange={e => setNewTask({ ...newTask, description: e.target.value })}
								className="w-full p-2 border rounded"
							/>
							<input
								type="date"
								value={newTask.due_date}
								onChange={e => setNewTask({ ...newTask, due_date: e.target.value })}
								className="w-full p-2 border rounded"
							/>

							<div className="flex justify-end space-x-2 pt-4">
								<button
									onClick={() => setShowModal(false)}
									className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
								>
									Cancel
								</button>
								<button
									onClick={handleAddTask}
									className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
								>
									Add Task
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{editModalTask && (
				<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
					<div className="bg-white p-6 rounded shadow w-full max-w-md">
						<h2 className="text-xl font-bold mb-4">Edit Task</h2>

						<div className="space-y-4">
							<input
								type="text"
								value={editForm.title}
								onChange={e => setEditForm({ ...editForm, title: e.target.value })}
								className="w-full p-2 border rounded"
								placeholder="Title"
							/>
							<input
								type="text"
								value={editForm.description}
								onChange={e => setEditForm({ ...editForm, description: e.target.value })}
								className="w-full p-2 border rounded"
								placeholder="Description"
							/>
							<input
								type="date"
								value={editForm.due_date}
								onChange={e => setEditForm({ ...editForm, due_date: e.target.value })}
								className="w-full p-2 border rounded"
							/>

							<div className="flex justify-end gap-2">
								<button
									onClick={() => setEditModalTask(null)}
									className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
								>
									Cancel
								</button>

								<button
									onClick={async () => {
										if (!editModalTask) return
										const token = localStorage.getItem('token')

										const res = await fetch(`http://192.168.137.50:8000/tasks/${editModalTask.id}`, {
											method: 'PUT',
											headers: {
												'Content-Type': 'application/json',
												Authorization: `Bearer ${token}`,
											},
											body: JSON.stringify({
												...editForm,
												status: editModalTask.status,
											}),
										})

										if (res.ok) {
											const updated = await res.json()
											setTasks(prev =>
												prev.map(t => (t.id === updated.id ? updated : t))
											)
											setEditModalTask(null)
										} else {
											alert('Failed to update task')
										}
									}}
									className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			)}


		</div>
	)
}


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Task {
  id: number;
  title: string;
  description: string;
  due_date: string;
  status: string;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    due_date: null as Date | null,
  });
  const [editModalTask, setEditModalTask] = useState<Task | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    due_date: null as Date | null,
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [editError, setEditError] = useState("");
  const [addError, setAddError] = useState("");
  const [expandedTaskId, setExpandedTaskId] = useState<{
    [id: number]: boolean;
  }>({});
  const router = useRouter();
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleGoToSignIn = () => {
    setShowSignInModal(false); // Close the modal
    router.push("/login"); // Navigate to your sign-in page route using router.push
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please sign in to continue");
        setShowSignInModal(true);
        return;
      }

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await res.json();
        setTasks(data); // Make sure this line exists in your component
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    // Reset error first
    setAddError("");
    // Add validation
    if (
      !newTask.title.trim() ||
      !newTask.description.trim() ||
      !newTask.due_date
    ) {
      setAddError("All fields are required");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      setAddError("Please sign in to continue your tasks");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newTask,
          status: "pending",
        }),
      });

      if (!res.ok) throw new Error("Failed to create task");

      const created = await res.json();
      setTasks((prev) => [...prev, created]);
      setShowModal(false);
      setNewTask({ title: "", description: "", due_date: null as Date | null });
      setAddError("");
    } catch {
      setAddError("Failed to create task. Please try again");
    }
  };

  return (
    <div className="p-6">
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <div className="px-6  pt-12 flex justify-center items-center">
        <button
          onClick={() => setShowModal(true)}
          className="my-12 px-6 py-4 my-6 rounded-2xl bg-gradient-to-br from-pink-600 via-red-500 to-yellow-500 text-white text-xl shadow-md text-shadow font-mono font-bold hover:brightness-110 transition duration-200"
        >
          Add Task Here
        </button>

        {/* Sign-in Required Modal */}
        {showSignInModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
            <div className="bg-white z-10 px-7 py-7 md:px-12 md:py-9 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 font-mono">
                Sign In Required
              </h2>
              <p className="text-gray-500 text-sm mb-6">{error}</p>
              <div className="flex justify-center space-x-4">
                {/* <button */}
                {/*                         className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400" */}
                {/*                         onClick={() => setShowSignInModal(false)} // Allows user to close without signing in */}
                {/*                     > */}
                {/*                         Cancel */}
                {/*                     </button> */}
                <button
                  className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-red-500 text-white text-md md:text-lg shadow-md font-bold hover:brightness-110 transition text-shadow duration-200"
                  onClick={handleGoToSignIn}
                >
                  Go to Sign In
                </button>
              </div>
            </div>
          </div>
        )}
        {/*mobile toggle */}
      </div>
      <div className="space-y-6 px-5 ">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`px-4 pb-3 md:pb-3 rounded-lg border flex flex-col md:flex-row justify-between  ${
              task.status === "done" ? "bg-green-100" : "bg-yellow-50"
            }`}
          >
            {/* Left side: content that expands */}
            <div className="relative flex-1 min-w-0 z-0">
              {/*title*/}
              <div className="z-10 px-2 pt-5 pb-4">
                <h2 className="font-mono text-lg sm:text-lg md:text-2xl font-bold pb-1 text-gray-800 break-words leading-relaxed max-w-full z-10">
                  {task.title}
                </h2>
                {/*description*/}
                <div className="font-mono text-md sm:text-base md:text-lg text-gray-700 break-words leading-relaxed whitespace-normal max-w-full">
                  {task.description.length > 25 ? (
                    expandedTaskId[task.id] ? (
                      <>
                        <p className="font-mono text-md sm:text-base md:text-lg text-gray-700 break-words leading-relaxed whitespace-normal max-w-full">
                          {task.description}
                        </p>
                        <button
                          onClick={() =>
                            setExpandedTaskId((prev) => ({
                              ...prev,
                              [task.id]: false,
                            }))
                          }
                          className="text-xs text-gray-500 underline mt-1"
                        >
                          {" "}
                          Show less
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="font-mono text-md sm:text-base md:text-lg text-gray-700 break-words leading-relaxed whitespace-normal max-w-full">
                          {task.description.slice(0, 100) + "..."}{" "}
                        </p>
                        <button
                          onClick={() =>
                            setExpandedTaskId((prev) => ({
                              ...prev,
                              [task.id]: true,
                            }))
                          }
                          className="font-mono text-xs text-gray-500 underline mt-1"
                        >
                          Read more{" "}
                        </button>
                      </>
                    )
                  ) : (
                    <p className="font-mono break-words whitespace-normal">
                      {task.description}
                    </p>
                  )}
                </div>

                {/*due date*/}
                <p className="mt-1 text-sm font-mono text-gray-500">
                  Due Date: {task.due_date.split("T")[0]}
                </p>

			{/*edit and delete button*/}		  
                <div className="flex flex-row justify-center md:flex-row md:justify-start  items-center mt-4 gap-2">
                  <button
                    onClick={() => {
                      setEditModalTask(task);
                      setEditForm({
                        title: task.title,
                        description: task.description,
                        due_date: new Date(task.due_date),
                      });
                    }}
                    className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-green-500 text-white text-xs shadow-md font-bold hover:brightness-110 transition text-shadow duration-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setTaskToDelete(task.id);
                      setShowDeleteModal(true);
                    }}
                    className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-red-500 text-white text-xs shadow-md font-bold hover:brightness-110 text-shadow transition duration-200"
						  >
                    Delete
                  </button>
                </div>
              </div>

              {/*  Mobile-only emoji status toggle button */}
              <div className="z-0 flex justify-center items-center">
                <button
                  onClick={async () => {
                    const token = localStorage.getItem("token");
                    if (!token) return;

                    const newStatus =
                      task.status === "done" ? "pending" : "done";

                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`,
                      {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                          title: task.title,
                          description: task.description,
                          due_date: task.due_date,
                          status: newStatus,
                        }),
                      }
                    );

                    if (res.ok) {
                      const updated = await res.json();
                      setTasks((prev) =>
                        prev.map((t) => (t.id === updated.id ? updated : t))
                      );
                    } else {
                      alert("Failed to update task status");
                    }
                  }}
                >
                  <span
                    className={`absolute top-4 right-0 gap-1 px-3 py-3 rounded-full text-black text-sm font-semibold hover:scale-105 transition duration-300 shadow-md cursor-pointer md:hidden ${
                      task.status === "done" ? "bg-green-500" : "bg-yellow-400"
                    }`}
                  >
                    {task.status === "done" ? "🎉" : "⏳"}
                  </span>{" "}
                </button>
              </div>
            </div>
            {/* toggle status */}
            <div className="self-start md:self-center shrink-0 w-[100px] text-right md:mt-0 ml-4 mr-2">
              <button
                onClick={async () => {
                  const token = localStorage.getItem("token");
                  if (!token) return;

                  const newStatus = task.status === "done" ? "pending" : "done";

                  const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                      body: JSON.stringify({
                        title: task.title,
                        description: task.description,
                        due_date: task.due_date,
                        status: newStatus, //  status is flipped
                      }),
                    }
                  );

                  if (res.ok) {
                    const updated = await res.json();
                    setTasks((prev) =>
                      prev.map((t) => (t.id === updated.id ? updated : t))
                    );
                  } else {
                    alert("Failed to update task status");
                  }
                }}
                className={`hidden md:inline-block text-sm px-6 py-2 rounded-xl hover:scale-105 transition duration-300 shadow-md text-shadow font-bold cursor-pointer ${
                  task.status === "done"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-400 text-black"
                }`}
              >
                {task.status === "done" ? "Done 🎉" : "Pending ⏳"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Moddel */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md md:max-w-xl lg:max-w-xl">
            <h2 className="text-xl font-bold mb-4 font-mono text-gray-700">
              Add New Task
            </h2>

            <div className="space-y-4">
              {addError && (
                <p className="text-red-500 text-sm md:text-md text-center mb-2">
                  {addError === "Please sign in to continue" ? (
                    <>
                      Please{" "}
                      <span
                        onClick={() => router.push("/login/")}
                        className="underline cursor-pointer hover:text-red-600 transition"
                      >
                        sign in
                      </span>{" "}
                      to continue
                    </>
                  ) : (
                    addError
                  )}
                </p>
              )}
              <textarea
                rows={1}
                placeholder="Task name"
                onChange={(e) =>
                  setNewTask({ ...newTask, title: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border border-pink-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                rows={6}
                placeholder="Notes..."
                value={newTask.description}
                onChange={(e) =>
                  setNewTask({ ...newTask, description: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border border-pink-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <DatePicker
                selected={newTask.due_date}
                onChange={(date: Date | null) =>
                  setNewTask({ ...newTask, due_date: date })
                }
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                className="mt-1 w-full px-3 py-2 border border-pink-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-3 rounded-full bg-gray-400 text-white text-sm shadow-md font-bold hover:brightness-110 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTask}
                  className="px-4 py-3 rounded-full bg-pink-500 text-white text-sm shadow-md font-bold hover:brightness-110 transition duration-200"
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
          <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md md:max-w-xl lg:max-w-xl">
            <h2 className="text-xl font-bold mb-4 font-mono text-gray-700">
              Edit Task
            </h2>

            <div className="space-y-4">
              {editError && (
                <p className="text-red-500 text-sm text-center mb-2">
                  {editError}
                </p>
              )}
              <textarea
                rows={1}
                placeholder="Task name"
                value={editForm.title}
                onChange={(e) =>
			
                  setEditForm({ ...editForm, title: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border border-green-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                rows={6}
                placeholder="Update your notes ..."
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({ ...editForm, description: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border border-green-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <DatePicker
                selected={newTask.due_date}
                onChange={(date: Date | null) =>
                  setNewTask({ ...newTask, due_date: date })
                }
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                className="mt-1 w-full px-3 py-2 border border-green-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <div className="flex pt-4 justify-end gap-2">
                <button
                  onClick={() => setEditModalTask(null)}
                  className="px-4 py-3 rounded-full bg-gray-400 text-white text-sm shadow-md font-bold hover:brightness-110 transition duration-200"
                >
                  Cancel
                </button>

                <button
                  onClick={async () => {
                    if (!editModalTask) return;

                    // Validation
                    if (
                      !editForm.title.trim() ||
                      !editForm.description.trim() ||
                      !editForm.due_date
                    ) {
                      setEditError("All fields are required");
                      return;
                    }

                    const token = localStorage.getItem("token");
                    setEditError(""); // Clear any old error

                    try {
                      const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${editModalTask.id}`,
                        {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                          },
                          body: JSON.stringify({
                            ...editForm,
                            status: editModalTask.status,
                          }),
                        }
                      );
                      if (!res.ok) {
                        const data = await res.json();
                        setEditError(data.detail || "Update failed"); // Show backend error
                        return;
                      }

                      const updated = await res.json();
                      setTasks((prev) =>
                        prev.map((t) => (t.id === updated.id ? updated : t))
                      );
                      setEditModalTask(null);
                    } catch {
                      setEditError("Something went wrong");
                    }
                  }}
                  className="px-4 py-3 rounded-full bg-green-500 text-white text-sm shadow-md font-bold hover:brightness-110 transition duration-200"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-sm text-center">
            <h3 className="text-md font-mono text-gray-700 font-semibold leading-normal mb-4">
              Are you sure you want to delete this task?
            </h3>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-3 rounded-full bg-gray-400 text-white text-sm shadow-md font-bold hover:brightness-110 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  const token = localStorage.getItem("token");
                  if (!token || !taskToDelete) return;

                  const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskToDelete}`,
                    {
                      method: "DELETE",
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    }
                  );

                  if (res.ok) {
                    setTasks((prev) =>
                      prev.filter((t) => t.id !== taskToDelete)
                    );
                  } else {
                    alert("Failed to delete task.");
                  }

                  setShowDeleteModal(false);
                  setTaskToDelete(null);
                }}
                className="px-5 py-3 rounded-full bg-red-500 text-white text-sm shadow-md font-bold hover:brightness-110 transition duration-200"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

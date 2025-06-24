.PHONY: test set_path unset_path clean_pyc

# Define the project root
PROJECT_ROOT := $(shell pwd)

# Target to run tests with PYTHONPATH set only for the command
test:
	@echo "Running tests..."
	PYTHONPATH=$(PROJECT_ROOT):$(PYTHONPATH) pytest tests/test_health.py
	@echo "Tests finished."

# Target to temporarily set PYTHONPATH (less recommended for general use,
# as it's better to manage this per command or with virtual envs)
set_path:
	@echo "Setting PYTHONPATH for current shell (temporary)..."
	@export PYTHONPATH=$(PROJECT_ROOT):$$PYTHONPATH && echo "PYTHONPATH set: $$PYTHONPATH"

# Target to unset PYTHONPATH
unset_path:
	@echo "Unsetting PYTHONPATH from current shell (if set by a previous make command)..."
	@unset PYTHONPATH
	@echo "PYTHONPATH unset."

clean_pyc:
	@echo "Cleaning up Python bytecode files..."
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
	@echo "Cleaned."

all: test_health.py

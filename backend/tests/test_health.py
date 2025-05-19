from fastapi.testclient import TestClient
from main import app

 #is a testing wrapper that allows you to simulate HTTP requests to your FastAPI app without running the actual server
client = TestClient(app) 

def test_healthcheck():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

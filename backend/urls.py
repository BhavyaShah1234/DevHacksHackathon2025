from django.urls import path
from backend.views import ReportsView

urlpatterns = [
    path("api/reports", ReportsView.as_view(), name="reports"),
]

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt  # type: ignore
from django.views import View
import json

# Mock database for demonstration purposes
mock_reports = [
    {"id": 1, "title": "Report 1", "description": "Description for Report 1"},
    {"id": 2, "title": "Report 2", "description": "Description for Report 2"},
    {"id": 3, "title": "Report 3", "description": "Description for Report 3"},
]

class ReportsView(View):
    def get(self, request):
        """
        Handle GET requests to fetch all reports.
        """
        return JsonResponse(mock_reports, safe=False)

    @csrf_exempt
    def post(self, request):
        """
        Handle POST requests to add a new report.
        """
        try:
            data = json.loads(request.body)
            new_report = {
                "id": len(mock_reports) + 1,
                "title": data.get("title"),
                "description": data.get("description"),
            }
            mock_reports.append(new_report)
            return JsonResponse({"message": "Report added successfully", "report": new_report}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

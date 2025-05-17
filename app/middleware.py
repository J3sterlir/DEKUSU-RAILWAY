from django.http import Http404

class CustomLoginRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check if the user is authenticated
        if not request.user.is_authenticated:
        # Raise a 404 error for unauthorized access
            raise Http404("Page not found")
           
        response = self.get_response(request)
        return response
   
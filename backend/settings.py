INSTALLED_APPS = [
    # Add other installed apps here
    "corsheaders",
]

MIDDLEWARE = []
MIDDLEWARE.insert(0, "corsheaders.middleware.CorsMiddleware")

CORS_ALLOW_ALL_ORIGINS = True

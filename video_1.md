# React and Django Setup

[Watch the tutorial on YouTube](https://www.youtube.com/watch?v=JD-age0BPVo)

## Requirements and Set-Up:
1. **Requirements:** 
   - Python
   - NPM
   - Node.js 
   > Links for downloading these tools are provided in the video description.

2. **Setting up in VS Code:** 
   - Created a folder named "react Django tutorial".

3. **VS Code Extensions:**
   - **Prettier:** Helps with formatting JavaScript and HTML.
   - **Python Extension:** Needed to work with Python in VS Code.
   - **Django Extension:** Recommended to get the one with the most downloads.
   - **React Extension:** React, Redux, GraphQL snippets.
   - **JavaScript Extension:** JavaScript ES6 code snippets.

## Setting up Django:
1. **Python Packages for Django:** 
   - Should have Python installed.
   - PIP tool for package management.

2. **PIP Commands:**
   - Check if PIP is installed: `pip`
   - MacOS/Linux alternative: `pip3`
   - Install Django and Django REST framework: `pip install django django-rest-framework`

3. **Setting up a Django Project:** 
   - Create a new project: `django-admin startproject [project_name]`
   > In the video, `music_controller` was used.

4. **Django App Creation:** 
   - Create an app: `django-admin startapp [app_name]`
   > In the video, `API` was used.

5. **Connecting the App to the Project:** 
   - Add the app to `INSTALLED_APPS` in `settings.py`: `API.apps.APIConfig`
   - Also added `rest_framework` to `INSTALLED_APPS`.

6. **Creating Views in Django:** 
   - Views determine content for a specific URL.
   - A basic view `main` was created in `views.py` to return "Hello".
   - `urls.py` in the `API` app links views to URLs.

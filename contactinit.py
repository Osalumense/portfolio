# # app/__init__.py
# import config
# import os
# from flask import Flask
# from flask_cors import CORS

# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate

# db = SQLAlchemy()

# def create_app():
#     app = Flask(__name__)
#     CORS(app)
#     environment_configuration = os.environ['CONFIGURATION_SETUP']
#     app.config.from_object(environment_configuration)

#     db.init_app(app)
#     migrate = Migrate(app, db)

#     with app.app_context():
#         # Register blueprints
#         from .contact_api import contact_api_blueprint
#         app.register_blueprint(contact_api_blueprint)
#         return app
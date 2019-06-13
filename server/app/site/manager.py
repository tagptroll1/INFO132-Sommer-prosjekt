import logging

from flask import Flask

from flask_restful import Api

from .api.dropdown_endpoint import Dropdown
from .api.multi_choice_endpoint import MultiChoice
from .database import RethinkDB


class Manager:
    def __init__(self):
        self.app = Flask(__name__)
        self.api = Api(self.app)
        self.db = RethinkDB()
        self.log = logging.getLogger(__name__)

        self.log.debug("Manager initialized")

    def load_api_resources(self):
        Dropdown.add(self, "/dropdown")
        MultiChoice.add(self, "/multichoice")

    def run(self):
        self.db.create_tables()
        self.app.run(debug=True)

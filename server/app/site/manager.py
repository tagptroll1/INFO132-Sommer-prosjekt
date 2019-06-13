import logging

from flask import Flask

from app.database import RethinkDb

class Manager:
    def __init__(self):
        self.app = Flask(__name__)
        self.db = RethinkDb()
        self.log = logging.getLogger(__name__)

        self.log.debug("Manager initialized")

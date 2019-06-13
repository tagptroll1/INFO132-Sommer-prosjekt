import flask
import flask_restful

import app.database as db
from app.site.manager import Manager


manager = Manager()
app = manager.app

if __name__ == "__main__":
    manager.run()

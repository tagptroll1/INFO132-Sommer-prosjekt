import flask

import app.database as db

r = db.RethinkDB()

r.create_tables()
respose = r.insert("multi_choice",{
    "id":2,
    "tags":"hello, ja, nei",
    "diffculity":2,
    "question_text":"Yo what dis?",
    "question_answer":"y",
    "choices":"yes,no,maybe,y"
}, conflict="error")

print(respose)
print(r.get("multi_choice",2))
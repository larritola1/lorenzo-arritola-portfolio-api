import os

from flask import Flask, flash, jsonify, redirect, render_template, request, session, url_for, send_file, current_app as app
from flask_mail import Mail, Message
from config import Config

# Configure application and import configuration
app = Flask(__name__)
app.config.from_object(Config)

# Assign sender email and password
EMAIL_USERNAME = os.environ["MAIL_USERNAME"]
EMAIL_PASSWORD = os.environ["MAIL_PASSWORD"]

# Setup flask-mail settings
app.config['SECRET_KEY'] = os.environ["SECRET_KEY"]
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = EMAIL_USERNAME
app.config['MAIL_PASSWORD'] = EMAIL_PASSWORD
app.config['MAIL_USE_TLS'] = True
mail = Mail(app)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/video_editing")
def video_editing():
    return render_template("video_editing.html")

@app.route("/motion_graphics")
def motion_graphics():
    return render_template("motion_graphics.html")

@app.route("/graphic_design")
def graphic_design():
    return render_template("graphic_design.html")

@app.route("/photography")
def photography():
    return render_template("photography.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":

        # Collect contact form info
        name =request.form.get("name")
        surname = request.form.get("surname")
        email = request.form.get("email")
        subject = "larritola.com: " + request.form.get("subject")
        message = request.form.get("message")

        # Send contact email message
        msg = Message(subject, sender=EMAIL_USERNAME, recipients=["lorenzoarritola@gmail.com"])
        msg.html = render_template("contact_email.html", name=name, surname=surname, email=email, message=message)
        mail.send(msg)

        flash("Submitted!")
        return redirect(url_for("contact"))

    else:
        return render_template("contact.html")
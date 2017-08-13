import os
from flask import render_template
from app import app

@app.route('/menu')
def menu():
	return render_template('menu.html',
							title='Menu')

@app.route('/')
@app.route('/education')
def education():
	return render_template('education.html',
							title='Education')

@app.route('/experience')
def experience():
	return render_template('experience.html',
							title='Experience')

@app.route('/skills')
def skills():
	return render_template('soon.html',
							title='Skills')

@app.route('/work')
def work():
	return render_template('soon.html',
							title='Work')

@app.route('/gallery')
def gallery():
	return render_template('soon.html',
							title='Gallery')

@app.route('/about')
def about():
	return render_template('soon.html',
							title='About Me')
from flask import Flask, request, render_template, flash, redirect, url_for, send_from_directory
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
import functions as fn
import shutil
from jinja2 import Environment, FileSystemLoader

CURRENT_DIR = os.path.dirname(__file__)
UPLOAD_FOLDER = f'{CURRENT_DIR}/uploads'
ALLOWED_EXTENTIONS = {'json','xlsx'}
OUTPUT_FOLDER = f'{CURRENT_DIR}/output'
ZIP_FOLDER = f'{CURRENT_DIR}/downloadables'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

@app.route('/')
def main():
    shutil.rmtree(UPLOAD_FOLDER)
    os.mkdir(UPLOAD_FOLDER)
    shutil.rmtree(OUTPUT_FOLDER)
    os.mkdir(OUTPUT_FOLDER)
    shutil.rmtree(ZIP_FOLDER)
    os.mkdir(ZIP_FOLDER)
    shutil.copytree('data view website contents', f'{OUTPUT_FOLDER}/website', dirs_exist_ok=True)
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        


        # get files from request 
        files = request.files.getlist('file')

        # check file types

        # save files
        for file in files:
            file.save(os.path.join(UPLOAD_FOLDER, file.filename))

        # process files
        personae = []
        for file in os.listdir(UPLOAD_FOLDER):
            name = file[:-5]
            personae.append(name)
            fn.process_file(file, OUTPUT_FOLDER, UPLOAD_FOLDER, f'{CURRENT_DIR}/standards')

        print(personae)

        # create dropdown gen
        # render log 
        env = Environment(loader=FileSystemLoader('templates'))
        template = env.get_template('dropdown-gen-template.jinja')
        output = template.render(array=personae)

        with open(f'{OUTPUT_FOLDER}/website/JS/dropdown-gen.js', 'w') as f:
            f.write(output)

        # zip archive output folder
        shutil.make_archive(f'{ZIP_FOLDER}/output', 'zip', OUTPUT_FOLDER)

    return render_template('file_download.html')


@app.route('/download', methods=['GET', 'POST'])
def download():
    return send_from_directory(directory=ZIP_FOLDER, path=f'{ZIP_FOLDER}/output.zip', filename='output.zip')



if __name__ == '__main__':
    app.run(debug=True, port=8000)
 
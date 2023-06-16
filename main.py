from flask import Flask, request, render_template, flash, redirect, send_from_directory
from flask_cors import CORS
import json
import os
import functions as fn
import shutil
from jinja2 import Environment, FileSystemLoader

CURRENT_DIR = os.path.dirname(__file__)
TMP_DIR = '/tmp'

UPLOAD_FOLDER = f'{TMP_DIR}/uploads'
ALLOWED_EXTENTIONS = {'json','xlsx'}
OUTPUT_FOLDER = f'{TMP_DIR}/output'
ZIP_FOLDER = f'{TMP_DIR}/downloadables'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

@app.route('/')
def main():

    return render_template('index.html')



@app.route('/upload', methods=['POST'])
def upload_file():
    fn.clear_dir(UPLOAD_FOLDER)
    fn.clear_dir(OUTPUT_FOLDER)
    fn.clear_dir(ZIP_FOLDER)
    shutil.copytree('data view website contents', f'{OUTPUT_FOLDER}/website', dirs_exist_ok=True)
    
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

        # personae
        personae = []
        for name in os.listdir(UPLOAD_FOLDER):
            personae.append(name[:-5])

        # process files
        summaries = []
        for file in os.listdir(UPLOAD_FOLDER):
            summary = fn.process_file(file, OUTPUT_FOLDER, UPLOAD_FOLDER, f'{CURRENT_DIR}/standards')
            with open(f'{OUTPUT_FOLDER}/{file[:-5]}/summary.json', 'w') as f:
                json.dump(summary, f, indent=4)

            summaries.append(summary)

        # create dropdown gen
        # render log 
        env = Environment(loader=FileSystemLoader('templates'))
        template = env.get_template('dropdown-gen-template.jinja')
        output = template.render(array=personae)

        with open(f'{OUTPUT_FOLDER}/website/JS/dropdown-gen.js', 'w') as f:
            f.write(output)

        template = env.get_template('index_template.jinja')
        output = template.render(personae=personae)

        with open(f'{OUTPUT_FOLDER}/website/index.html', 'w') as f:
            f.write(output)


        # zip archive output folder
        shutil.make_archive(f'{ZIP_FOLDER}/output', 'zip', OUTPUT_FOLDER)

        fn.create_false_path_excel(OUTPUT_FOLDER, summaries)

    return render_template('file_download.html', summaries = summaries)


@app.route('/download', methods=['GET', 'POST'])
def download():
    return send_from_directory(directory=ZIP_FOLDER, path=f'{ZIP_FOLDER}/output.zip', filename='output.zip')



if __name__ == '__main__':
    app.run(debug=True, port=8000)
 
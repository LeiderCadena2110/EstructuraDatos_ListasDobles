from flask import Flask, jsonify, render_template, request
render_template
from doubly_linked_list import DoublyLinkedList
DoublyLinkedList
app = Flask(__name__)

dll = DoublyLinkedList()

@app.route('/add', methods=['POST'])
def add():
    data = request.json.get('data')
    dll.append(data)
    return jsonify({'message': 'Added successfully', 'list': dll.to_list()})

@app.route('/delete', methods=['DELETE'])
def delete():
    data = request.json.get('data')
    success = dll.delete(data)
    if success:
        return jsonify({'message': 'Deleted successfully', 'list': dll.to_list()})
    else:
        return jsonify({'message': 'Data not found', 'list': dll.to_list()}), 404

@app.route('/list', methods=['GET'])
def get_list():
    return jsonify({'list': dll.to_list()})

if __name__ == '__main__':
    app.run(debug=True)
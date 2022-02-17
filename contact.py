# # app/contact_api/contact_us.py
# from flask import request, jsonify
# from flask_restful import reqparse
# from ..models import ContactUsModel
# from .i_contact_us import IConactUs

# class ContactUs(IConactUs):
# 	def add_contact_us_details(self, _db):
# 		# name = request.form['name']
# 		# subject = request.form['subject']
# 		# email = request.form['email']
# 		# mssg = request.form['mssg']

		
# 		contact_post_args = reqparse.RequestParser()
# 		contact_post_args.add_argument("name", type=str, help="Name cannot be empty", required=True)
# 		contact_post_args.add_argument("email", type=str, help="Email cannot be empty", required=True)
# 		contact_post_args.add_argument("subject", type=str, help="Subject cannot be empty", required=True)
# 		contact_post_args.add_argument("mssg", type=str, help="Message cannot be empty", required=True)

# 		args = contact_post_args.parse_args()

# 		name = args["name"]
# 		subject = args["subject"]
# 		email = args["email"]
# 		mssg = args["mssg"]

		

# 		contact = ContactUsModel()
# 		contact.email = email
# 		contact.name = name
# 		contact.subject = subject
# 		contact.mssg = mssg

# 		_db.session.add(contact)
# 		_db.session.commit()

# 		response = jsonify({'message': 'Contact added', 'result': contact.to_json()})

# 		return response

# 	def get_contacts(self):
# 		items = []
# 		for row in ContactUsModel.query.all():
# 			items.append(row.to_json())

# 		response = jsonify({'results': items})
# 		return response
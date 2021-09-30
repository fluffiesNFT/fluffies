import os

for i in range(4444):
	os.makedirs('api/' + str(i))
	

for n in os.listdir(os.getcwd() + '/api/'):
	file = os.getcwd() + '/api/' + n
	f = open(file + '/index.json', 'w')
	f.write(
	"""{
	  "name": "Fluffie #""" + n + """",
	  "description": "Fluffie #""" + n + """ of 4,444! This one looks rare.",
	  "image": "https://storage.googleapis.com/fluffies/""" + n + """.gif"
	  }""")
	f.close()
r_file = open('to_paste.txt', 'r')

lines = r_file.readlines()

w_file = open('insert.html', 'w')

for i in range(1,101):
    w_file.write(f"\"{lines[i-1].strip()}\",\n") 
#for i in range(1,101):
#    w_file.write(f"<li class=\"list-group-item d-flex justify-content-start align-items-start bg-transparent border-0\"><label for=\"{i}\"><input type=\"checkbox\" id=\"{i}\">" + lines[i-1].strip() + "</label></li>\n")
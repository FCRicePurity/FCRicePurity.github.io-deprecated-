r_file = open('to_paste.txt', 'r')

lines = r_file.readlines()

w_file = open('insert.html', 'w')

for i in range(1,101):
    w_file.write(f"<li><input type=\"checkbox\" id=\"{i}\"><label for=\"{i}\">" + lines[i-1].strip() + "</label></li>\n")
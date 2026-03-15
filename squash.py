import sys
with open(sys.argv[1], 'r') as f:
    lines = f.readlines()
with open(sys.argv[1], 'w') as f:
    for line in lines:
        if 'Clean up codebase by removing extraneous comments' in line:
            line = line.replace('pick ', 'fixup ', 1)
        f.write(line)

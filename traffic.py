# py traffic.py
import csv
from datetime import datetime
import matplotlib.pyplot as plt

dates = []
# totals = []
# uniques = []

total_clones = []
unique_cloners = []

with open('analytics/traffic.csv', newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        dates.append(datetime.strptime(row['date'], '%Y-%m-%d'))
        total_clones.append(int(row['total_clones']))
        unique_cloners.append(int(row['total_unique_cloners']))


plt.figure(figsize=(10, 6))

plt.plot(dates, total_clones, marker='o', linestyle='-', color='blue', label='Total Clones')

plt.plot(dates, unique_cloners, marker='x', linestyle='--', color='red', label='Unique Cloners')

plt.title('Clones during time')
plt.xlabel('Date')
plt.ylabel('Count')
plt.legend()
plt.grid(True, linestyle=':', alpha=0.7)
plt.xticks(rotation=30)
plt.tight_layout()
plt.show()

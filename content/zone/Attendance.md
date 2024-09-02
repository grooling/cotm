---
title: Attendance
description: Game Attendance
draft: true
---
```dataview
TABLE WITHOUT ID abna as "Name",
count AS "Absences", 
rows.file.name AS "Sessions"
WHERE absent
FLATTEN absent as abna
GROUP BY abna
FLATTEN length(rows.file.name) as count
SORT count DESC
```

```dataview
TABLE WITHOUT ID file.name as "Session", dateformat(date(date), "yyyy-MM-dd") as "Date", absent as "Absent" WHERE contains(lower(type),"session") AND file.name != "New Session Template" SORT date ASC
```


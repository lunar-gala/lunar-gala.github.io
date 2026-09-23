# The below was written by a human being.
Last edited Sept 23, 2026 by Viviana Staicu.

## Updating the application deadlines?
Example formatting is described clearly by AI below.
Prompt example: "Keep the structure of @applyConfig.csv , but now that application deadlines are closed, i just want a '-' under each department, and a sentence at the top announcing that LG 2027 applications are closed."

## Updating Contact infos?
Copypaste a CSV of the LG master contacts sheet into cursor or claudecode to update the infoConfig.csv so you don't have to go through copypaste hell one by one.


# The below was written by AI.
# Editing site content

`info.html` and `apply.html` load these CSVs in the browser. The first row is the header. Do not rename or reorder the columns. Each following row is one block on the page.

The `id` value is glued onto element ids in the HTML. A row only works if those elements already exist. A new `id` with no matching elements stops the rest of the file from loading.

## infoConfig.csv

Shown on the board section of `info.html`.

```
id,Names,Position,Email
Producers,Erin Hsu & Aziza Norkulova,Producers,cmu.lunargala@gmail.com
```

| Column | What it fills |
|---|---|
| `id` | Chooses the board slot. Writes `id` + `Title`, `id` + `Name`, and `id` + `Email`. |
| `Names` | The people's names. |
| `Position` | The role label above the names. |
| `Email` | The contact line. Leave it blank if there is no public email. |

Ids currently wired up in `info.html`: `Producers`, `Model`, `Design`, `Cinematography`, `Production`, `PR`, `Creative`, `Dance`, `Finance`, `Advisor`.

`Cinematography` and `Dance` have empty slots on the page. Add a row with that `id` to fill them.

## applyConfig.csv

Shown under each department on `apply.html`.

```
id,Title,Date,Link,Info,Location
Design,,-,,,
```

| Column | What it fills |
|---|---|
| `id` | Chooses the department. Writes `id` + `Title`, `id` + `Date`, `id` + `Link`, `id` + `Info`, and `id` + `Location`. |
| `Title` | First line, such as "Application Deadline". |
| `Date` | Second line. A `-` means applications for that department are closed. |
| `Link` | Sets the `href` of the link. It does not change the link text. |
| `Info` | Extra note under the date. |
| `Location` | Where the event is. |

Leave a cell empty to keep whatever is already written in `apply.html`. The page currently shows only the date line, so leave `Title`, `Link`, `Info`, and `Location` empty unless you add the matching elements in `apply.html`.

Ids currently wired up in `apply.html`: `Design`, `LocalDesign`, `Production`, `Model`, `Creative`, `PublicRelations`.

The closed-applications sentence at the top of `apply.html` is written in that file, not in this CSV.
```mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_sp
  activate server
  server-->>browser: `application/json`, {content: "another note", date: "2023-03-21T23:02:23.076Z"}
  deactivate server
  deactivate server
```
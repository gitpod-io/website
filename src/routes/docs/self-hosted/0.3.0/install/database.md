---
section: self-hosted/0.3.0/self-hosted
title: Database
---

<script context="module">
  export const prerender = true;
</script>

# Database

This chart installs a MySQL database which gets Gitpod up and running but is not suitable for production (the data is lost on each restart of the DB pod). To connect to a porper MySQL installation:

- initialize your MySQL database using the SQL files in `database/`. E.g. in a mysql session connected to your database server run:
  ```
  SET @gitpodDbPassword = IFNULL(@gitpodDbPassword, 'your-password-goes-here');
  source database/01-create-user.sql;
  source database/02-create-and-init-sessions-db.sql;
  source database/03-recreate-gitpod-db.sql;
  ```
- `echo values/database.yaml >> configuration.txt`
- in `values/database.yaml` change the values in `gitpod.db` to match your installation

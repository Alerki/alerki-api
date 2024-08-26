#!/bin/bash

pg_dump -U alerki -W -F t alerki > backup.tar

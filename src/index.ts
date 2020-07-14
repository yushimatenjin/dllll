#!/usr/bin/env node
import { spawn } from "child_process";
if(!process.argv[2]) process.exit(0)
spawn(process.argv[2], [...process.argv.slice(3)], { stdio: "inherit" });

import { readFileSync } from 'fs';
import * as jsYaml from 'js-yaml';
import { join } from 'path';

export interface AppConfig {
  http: Http;
  database: Database;
}

interface Another {
  first: string;
}

export interface Database {
  url: string;
  port: number;
  name: string;
  another: Another;
  props: Record<string, Record<string, string>>;
}

export interface Http {
  port: number;
  host: string;
}

export const yaml = () => {
  // prolly we should load config.yaml + env specific config file and merge them with the second having precedence
  return jsYaml.load(readFileSync(join(__dirname, `config.yaml`), 'utf8')) as Record<string, any>;
};

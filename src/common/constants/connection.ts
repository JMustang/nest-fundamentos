export const connection: Connection = {
  CONNECTION_STRING: 'mongodb://localhost:27017/test',
  DB: 'XXXX',
  DBNAME: 'XXXX',
};

export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DBNAME: string;
};

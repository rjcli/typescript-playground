const mainUserName = 'Max';

const greeting = `Hi there, ${mainUserName}`;

console.log(mainUserName, greeting);

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DateFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [Key in DateFileEventNames]: () => void;
};

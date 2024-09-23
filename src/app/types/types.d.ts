declare global {
  interface ComponentType {
    name: string;
    description: string;
    component: React.ReactNode;
    code: string;
    usage: string;
  }
}

export {};

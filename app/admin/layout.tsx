interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metaData = {
  title: "E-Shop Admin",
  description: "E-Shop Admin Dashboard",
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>Nav</div>
      {children}
    </div>
  );
};

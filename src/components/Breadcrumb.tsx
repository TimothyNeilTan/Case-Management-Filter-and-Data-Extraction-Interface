import React from 'react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    onClick?: () => void;
    isActive?: boolean;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center text-sm text-gray-600 mb-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="mx-2">/</span>}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className={`hover:text-gray-800 ${
                item.isActive ? 'text-gray-900 font-medium' : 'text-gray-600'
              }`}
            >
              {item.label}
            </button>
          ) : (
            <span
              className={`${
                item.isActive ? 'text-gray-900 font-medium' : 'text-gray-600'
              }`}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb; 
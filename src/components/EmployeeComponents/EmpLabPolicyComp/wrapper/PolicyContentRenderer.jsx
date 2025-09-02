import React from "react";

const PolicyContentRenderer = ({ content }) => {
  if (!Array.isArray(content)) {
    return null;
  }
  return (
    <div className="space-y-6">
      {content.map((section, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="text-lg font-semibold text-gray-800">{section.header}</h4>

          <ul className="list-disc pl-6 space-y-1">
            {section.points.map((point, i) => (
              <li
                key={i}
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: point }}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PolicyContentRenderer;

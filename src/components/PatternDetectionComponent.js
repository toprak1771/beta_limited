import React from "react";

function PatternDetectionComponent({data}) {
  return (
    <div className="bg-white border border-[1.8px] shadow-md rounded-lg p-6 mt-4">
      <h2 className="text-xl font-semibold mb-2">Detected Patterns</h2>
      <p className="text-sm text-gray-500 mb-6">
        Subscription and recurring payment detection
      </p>

      <div className="space-y-4">
        {data.map((pattern, index) => (
          <div
            key={index}
            className="border border-[1.8px] rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{pattern.merchant}</h3>
                <p className="text-sm text-gray-500">{pattern.type}  ● {pattern.frequency}  </p>
               
                <p className="text-sm text-gray-600 mt-1">
                {pattern.detail} 
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${pattern.amount}</p>
                {pattern.next_expected && (
                  <p className="text-xs text-gray-500">
                    Next: {pattern.next_expected}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatternDetectionComponent;

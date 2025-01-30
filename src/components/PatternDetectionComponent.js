import React from "react";

const patterns = [
  {
    merchant: "Netflix",
    type: "subscription • monthly",
    description: "Consistent monthly payment on the 1st/15th",
    amount: "$19.99",
    nextDate: "2/1/2024",
    frequency: "monthly",
  },
  {
    merchant: "Spotify",
    type: "subscription • monthly",
    description: "Regular monthly subscription",
    amount: "$9.99",
    nextDate: "2/2/2024",
    frequency: "monthly",
  },
  {
    merchant: "Uber",
    type: "recurring • weekly",
    description: "Regular rides averaging $31.50 per trip",
    amount: "$~31.50",
    frequency: "weekly",
  },
  {
    merchant: "Starbucks",
    type: "recurring • 2-3 times per week",
    description: "Regular purchases at the same location",
    amount: "$5.75",
    frequency: "2-3/week",
  },
  {
    merchant: "Apple",
    type: "subscription • monthly",
    description: "Monthly subscription service",
    amount: "$2.99",
    nextDate: "2/15/2024",
    frequency: "monthly",
  },
];

function PatternDetectionComponent() {
  return (
    <div className="bg-white rounded-lg p-6 mt-4">
      <h2 className="text-xl font-semibold mb-2">Detected Patterns</h2>
      <p className="text-sm text-gray-500 mb-6">
        Subscription and recurring payment detection
      </p>

      <div className="space-y-4">
        {patterns.map((pattern, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{pattern.merchant}</h3>
                <p className="text-sm text-gray-500">{pattern.type}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {pattern.description}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{pattern.amount}</p>
                {pattern.nextDate && (
                  <p className="text-sm text-gray-500">
                    Next: {pattern.nextDate}
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

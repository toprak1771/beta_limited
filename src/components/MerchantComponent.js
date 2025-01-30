import React from 'react'
import MerchantItem from './MerchantItem'

function MerchantComponent({data}) {
  return (
    <div className="mt-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Normalized Merchants</h2>
              <p className="text-sm text-gray-600 mb-6">AI-powered merchant name normalization and categorization</p>

              <div className="space-y-6">
                {data.map(item => (
                    <MerchantItem
                    key={item.id}
                      original={item.description}
                      normalized={item.merchant}
                      tags={[item.sub_category, ...item.flags]}
                      is_subscription={item.is_subscription}
                    />
                ))}
              </div>
            </div>
          </div>
  )
}

export default MerchantComponent
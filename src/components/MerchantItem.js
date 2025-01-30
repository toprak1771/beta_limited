export default function MerchantItem({
    original,
    normalized,
    tags,
    is_subscription
  }) {
    return (
      <div className="border-b pb-4 last:border-b-0 last:pb-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="text-sm text-gray-600">Original</div>
            <div className="font-mono">{original}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Normalized</div>
            <div className="font-semibold">{normalized}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {is_subscription && (
            <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                subscription
            </span>
          )}
        </div>
      </div>
    )
  }
import React from 'react';

export default function AccessibilityConfirmation({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-transparent">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm mx-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Accessibility Settings
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You have selected to change accessibility features. Do you want to continue?
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 transition-colors"
            onClick={onConfirm}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
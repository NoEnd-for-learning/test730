import React from 'react';
import { render } from '@testing-library/react';
import { Demo } from '../../src/demo';

describe("UI test #demo", () => {
  it('should have title', function () {
    const text = 'test title';
    const { getByText } = render(<Demo title={text} />);
    const titleElement = getByText(text);
    expect(titleElement.tagName).toBe('H2');
  });
});

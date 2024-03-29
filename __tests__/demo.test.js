import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import sinon from 'sinon';
import { Demo } from '../src/demo';

describe("UI test #demo", () => {
  it('should have title', () => {
    const text = 'test title';
    const { getByText } = render(<Demo title={text} />);
    const titleElement = getByText(text);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H2');
  });

  it('should add 1 when click button', () => {
    const { getByText, container } = render(<Demo />);
    const buttonElement = getByText('value++');
    fireEvent.click(buttonElement);

    // 获取具有特定类的所有节点
    const counterNodes = container.querySelectorAll('.counter');
    const counter = counterNodes[0];
    expect(counter.textContent).toBe('1');
  });

  it('should change when input number', () => {
    const { container } = render(<Demo />);
    const counterNodes = container.querySelectorAll('.counter');
    const counter = counterNodes[0];
    // const inputNodes = container.querySelectorAll('.my-input');
    // const input = inputNodes[0];
    const input = screen.getByLabelText('Input:');
    fireEvent.change(input, { target: { value: 142857 } });

    expect(counter.textContent).toBe('142857');
  });

  it('should change when props change', () => {
    const { container } = render(<Demo value={999999} />);
    const counterNodes = container.querySelectorAll('.counter');
    const counter = counterNodes[0];
    expect(counter.textContent).toBe('999999');
  });

  // 统计钩子函数的执行次数
  it('should calls componentDidMount & componentDidUpdate', function () {
    const onMountSpy = sinon.spy();
    const onUpdateSpy = sinon.spy();

    const { rerender } = render(<Demo onMount={onMountSpy} onUpdate={onUpdateSpy} />);
    expect(onMountSpy.callCount).toBe(1);
    expect(onUpdateSpy.callCount).toBe(0);

    rerender(<Demo onMount={onMountSpy} onUpdate={onUpdateSpy} title={'componentDidUpdate'} />);
    expect(onMountSpy.callCount).toBe(1);
    expect(onUpdateSpy.callCount).toBe(2);
  });
});

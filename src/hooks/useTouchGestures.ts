
import { useEffect, useRef } from 'react';
import Hammer from 'hammerjs';

interface TouchGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onPinchIn?: () => void;
  onPinchOut?: () => void;
  onTap?: () => void;
  onDoubleTap?: () => void;
  onPress?: () => void;
}

export const useTouchGestures = (options: TouchGestureOptions) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const hammer = new Hammer(elementRef.current);
    
    // Configurar gestos
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer.get('pinch').set({ enable: true });
    hammer.get('press').set({ time: 500 });

    // Adicionar listeners
    if (options.onSwipeLeft) {
      hammer.on('swipeleft', options.onSwipeLeft);
    }
    if (options.onSwipeRight) {
      hammer.on('swiperight', options.onSwipeRight);
    }
    if (options.onSwipeUp) {
      hammer.on('swipeup', options.onSwipeUp);
    }
    if (options.onSwipeDown) {
      hammer.on('swipedown', options.onSwipeDown);
    }
    if (options.onPinchIn) {
      hammer.on('pinchin', options.onPinchIn);
    }
    if (options.onPinchOut) {
      hammer.on('pinchout', options.onPinchOut);
    }
    if (options.onTap) {
      hammer.on('tap', options.onTap);
    }
    if (options.onDoubleTap) {
      hammer.on('doubletap', options.onDoubleTap);
    }
    if (options.onPress) {
      hammer.on('press', options.onPress);
    }

    return () => {
      hammer.destroy();
    };
  }, [options]);

  return elementRef;
};

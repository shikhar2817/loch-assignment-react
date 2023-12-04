import React from "react"
import { AnimationPlaybackControls, useAnimate, useInView, motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const TICKER_DIRECTION_LEFT = -1;

type TickerProps = {
  children: JSX.Element[];
  duration?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isPlaying?: boolean;
  direction?: number;
  drag?: boolean
};

const noop = () => { };

const Ticker: React.FunctionComponent<TickerProps> = (props: TickerProps) => {
  const {
    children,
    duration = 10,
    onMouseEnter = noop,
    onMouseLeave = noop,
    isPlaying = true,
    direction = TICKER_DIRECTION_LEFT,
    drag = false
  } = props;
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [tickerUUID, setTickerUUID] = React.useState<string>('');
  const [tickerContentWidth, setTickerContentWidth] = React.useState<number | null>(0);
  const [numDupes, setNumDupes] = React.useState<number>(1);
  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = React.useState<
    AnimationPlaybackControls | undefined
  >(undefined);
  const isInView = useInView(scope);

  React.useEffect(() => {
    setTickerUUID(uuidv4());
  }, []);

  React.useEffect(() => {
    let contentWidth = 0;

    for (let index = 0; index < children.length; index++) {
      const element = document.getElementById(tickerUUID + '_' + index)?.clientWidth;
      if (element) {
        contentWidth += element;
      }
    }

    setTickerContentWidth(contentWidth);
  });

  React.useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(Math.max(Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth), 1));
    }
  }, [tickerRef.current, tickerContentWidth]);

  React.useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        { x: tickerContentWidth ? tickerContentWidth * direction : 0 },
        { ease: 'linear', duration, repeat: Infinity }
      );
      controls.play();
      setAnimationControls(controls);
    }
  }, [isInView]);

  React.useEffect(() => {
    if (animationControls) {
      if (!isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying]);

  return (
    <div
      className="ticker_container"
      ref={tickerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        ref={scope}
        className="ticker_container__contents"
        style={{ display: 'flex', gap: '1rem' }}
        drag={drag ? "x" : undefined}
        dragConstraints={{
          right: 0
        }}
        onDragEnd={() => {
          animationControls?.play()
        }}
      >
        {children.map((item, index) => (
          <motion.div key={index} id={`${tickerUUID}_${index}`}>
            {item}
          </motion.div>
        ))}
        {[...Array(numDupes)].map((_) =>
          children.map((item, index) => <motion.div
            key={index}
          >
            {item}
          </motion.div>)
        )}
      </motion.div>
    </div>
  );
};

export default Ticker;

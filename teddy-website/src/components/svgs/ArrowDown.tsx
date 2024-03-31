interface ArrowDownProps {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => (
  <svg
    width="57"
    height="461"
    viewBox="0 0 57 461"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <line
      x1="19"
      x2="19"
      y2="334.006"
      stroke="black"
      strokeWidth="4"
      strokeDasharray="10 10"
    />
    <path
      d="M17.2322 459.789C18.2085 460.766 19.7915 460.766 20.7678 459.789L36.6777 443.879C37.654 442.903 37.654 441.32 36.6777 440.344C35.7014 439.368 34.1184 439.368 33.1421 440.344L19 454.486L4.85786 440.344C3.88155 439.368 2.29864 439.368 1.32233 440.344C0.34602 441.32 0.34602 442.903 1.32233 443.879L17.2322 459.789ZM16.5 88L16.5 458.022H21.5L21.5 88H16.5Z"
      fill="black"
    />
    <path
      d="M29.712 175.124C29.712 173.204 30 171.368 30.576 169.616C31.176 167.864 31.944 166.484 32.88 165.476L35.688 166.808C34.848 167.768 34.152 168.992 33.6 170.48C33.048 171.968 32.772 173.516 32.772 175.124C32.772 176.588 32.94 177.776 33.276 178.688C33.612 179.6 34.068 180.272 34.644 180.704C35.244 181.136 35.916 181.352 36.66 181.352C37.524 181.352 38.22 181.064 38.748 180.488C39.276 179.936 39.696 179.204 40.008 178.292C40.344 177.404 40.632 176.42 40.872 175.34C41.112 174.26 41.388 173.168 41.7 172.064C42.036 170.984 42.456 169.988 42.96 169.076C43.464 168.188 44.136 167.468 44.976 166.916C45.84 166.364 46.944 166.088 48.288 166.088C49.584 166.088 50.772 166.424 51.852 167.096C52.956 167.792 53.832 168.848 54.48 170.264C55.152 171.704 55.488 173.528 55.488 175.736C55.488 177.2 55.296 178.652 54.912 180.092C54.528 181.532 53.976 182.78 53.256 183.836L50.376 182.648C51.096 181.568 51.612 180.428 51.924 179.228C52.26 178.028 52.428 176.864 52.428 175.736C52.428 174.32 52.248 173.156 51.888 172.244C51.528 171.332 51.048 170.66 50.448 170.228C49.848 169.82 49.176 169.616 48.432 169.616C47.544 169.616 46.836 169.892 46.308 170.444C45.78 171.02 45.36 171.752 45.048 172.64C44.736 173.552 44.448 174.548 44.184 175.628C43.944 176.708 43.668 177.788 43.356 178.868C43.044 179.972 42.636 180.968 42.132 181.856C41.628 182.768 40.956 183.5 40.116 184.052C39.276 184.604 38.196 184.88 36.876 184.88C35.604 184.88 34.416 184.532 33.312 183.836C32.232 183.14 31.356 182.06 30.684 180.596C30.036 179.156 29.712 177.332 29.712 175.124ZM29.784 197.951C29.784 196.007 30.204 194.267 31.044 192.731C31.884 191.219 33.036 190.031 34.5 189.167C35.964 188.303 37.644 187.871 39.54 187.871C41.436 187.871 43.116 188.303 44.58 189.167C46.044 190.031 47.184 191.219 48 192.731C48.84 194.267 49.26 196.007 49.26 197.951C49.26 199.679 48.912 201.215 48.216 202.559C47.544 203.927 46.536 204.983 45.192 205.727L43.5 203.099C44.436 202.475 45.12 201.707 45.552 200.795C46.008 199.907 46.236 198.947 46.236 197.915C46.236 196.667 45.96 195.551 45.408 194.567C44.856 193.583 44.076 192.803 43.068 192.227C42.084 191.651 40.908 191.363 39.54 191.363C38.172 191.363 36.984 191.651 35.976 192.227C34.968 192.803 34.188 193.583 33.636 194.567C33.084 195.551 32.808 196.667 32.808 197.915C32.808 198.947 33.024 199.907 33.456 200.795C33.912 201.707 34.608 202.475 35.544 203.099L33.888 205.727C32.568 204.983 31.548 203.927 30.828 202.559C30.132 201.215 29.784 199.679 29.784 197.951ZM30 210.202H49.08V213.514H43.896L45.192 213.19C46.512 213.718 47.52 214.606 48.216 215.854C48.912 217.102 49.26 218.638 49.26 220.462H45.912C45.936 220.318 45.948 220.174 45.948 220.03C45.948 219.91 45.948 219.79 45.948 219.67C45.948 217.822 45.396 216.358 44.292 215.278C43.188 214.198 41.592 213.658 39.504 213.658H30V210.202ZM29.784 232.718C29.784 230.798 30.204 229.094 31.044 227.606C31.884 226.118 33.036 224.942 34.5 224.078C35.988 223.214 37.668 222.782 39.54 222.782C41.436 222.782 43.116 223.214 44.58 224.078C46.044 224.942 47.184 226.118 48 227.606C48.84 229.094 49.26 230.798 49.26 232.718C49.26 234.614 48.84 236.306 48 237.794C47.184 239.306 46.044 240.482 44.58 241.322C43.14 242.186 41.46 242.618 39.54 242.618C37.644 242.618 35.964 242.186 34.5 241.322C33.036 240.482 31.884 239.306 31.044 237.794C30.204 236.306 29.784 234.614 29.784 232.718ZM32.808 232.718C32.808 233.942 33.084 235.034 33.636 235.994C34.188 236.978 34.968 237.746 35.976 238.298C37.008 238.85 38.196 239.126 39.54 239.126C40.908 239.126 42.084 238.85 43.068 238.298C44.076 237.746 44.856 236.978 45.408 235.994C45.96 235.034 46.236 233.942 46.236 232.718C46.236 231.494 45.96 230.402 45.408 229.442C44.856 228.482 44.076 227.714 43.068 227.138C42.084 226.562 40.908 226.274 39.54 226.274C38.196 226.274 37.008 226.562 35.976 227.138C34.968 227.714 34.188 228.482 33.636 229.442C33.084 230.402 32.808 231.494 32.808 232.718ZM30 247.397H56.712V250.853H30V247.397ZM30 257.452H56.712V260.908H30V257.452ZM30 277.678H55.2V288.298C55.2 290.986 54.672 293.35 53.616 295.39C52.56 297.454 51.084 299.05 49.188 300.178C47.292 301.33 45.096 301.906 42.6 301.906C40.104 301.906 37.908 301.33 36.012 300.178C34.116 299.05 32.64 297.454 31.584 295.39C30.528 293.35 30 290.986 30 288.298V277.678ZM33.132 281.278V288.082C33.132 290.17 33.528 291.97 34.32 293.482C35.112 295.018 36.216 296.206 37.632 297.046C39.072 297.886 40.728 298.306 42.6 298.306C44.496 298.306 46.152 297.886 47.568 297.046C48.984 296.206 50.088 295.018 50.88 293.482C51.672 291.97 52.068 290.17 52.068 288.082V281.278H33.132ZM29.784 315.089C29.784 313.169 30.204 311.465 31.044 309.977C31.884 308.489 33.036 307.313 34.5 306.449C35.988 305.585 37.668 305.153 39.54 305.153C41.436 305.153 43.116 305.585 44.58 306.449C46.044 307.313 47.184 308.489 48 309.977C48.84 311.465 49.26 313.169 49.26 315.089C49.26 316.985 48.84 318.677 48 320.165C47.184 321.677 46.044 322.853 44.58 323.693C43.14 324.557 41.46 324.989 39.54 324.989C37.644 324.989 35.964 324.557 34.5 323.693C33.036 322.853 31.884 321.677 31.044 320.165C30.204 318.677 29.784 316.985 29.784 315.089ZM32.808 315.089C32.808 316.313 33.084 317.405 33.636 318.365C34.188 319.349 34.968 320.117 35.976 320.669C37.008 321.221 38.196 321.497 39.54 321.497C40.908 321.497 42.084 321.221 43.068 320.669C44.076 320.117 44.856 319.349 45.408 318.365C45.96 317.405 46.236 316.313 46.236 315.089C46.236 313.865 45.96 312.773 45.408 311.813C44.856 310.853 44.076 310.085 43.068 309.509C42.084 308.933 40.908 308.645 39.54 308.645C38.196 308.645 37.008 308.933 35.976 309.509C34.968 310.085 34.188 310.853 33.636 311.813C33.084 312.773 32.808 313.865 32.808 315.089ZM30 333.273L49.08 326.181V329.457L31.8 335.757V334.209L49.08 340.761V343.677L31.8 350.085V348.573L49.08 355.017V358.113L30 350.985V347.673L45.768 341.661V342.669L30 336.585V333.273ZM49.26 371.808C49.26 373.368 48.96 374.736 48.36 375.912C47.76 377.112 46.848 378.048 45.624 378.72C44.4 379.392 42.852 379.728 40.98 379.728H30V376.272H40.584C42.432 376.272 43.824 375.816 44.76 374.904C45.696 374.016 46.164 372.756 46.164 371.124C46.164 369.9 45.924 368.832 45.444 367.92C44.964 367.008 44.256 366.3 43.32 365.796C42.384 365.316 41.22 365.076 39.828 365.076H30V361.62H49.08V364.932H43.932L45.3 364.392C46.548 365.016 47.52 365.976 48.216 367.272C48.912 368.568 49.26 370.08 49.26 371.808Z"
      fill="black"
    />
  </svg>
);

export default ArrowDown;

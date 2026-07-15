export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9647700000000"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-600
        hover:bg-green-700
        text-white
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
        text-3xl
        shadow-2xl
        transition
        duration-300
      "
      aria-label="تواصل عبر واتساب"
    >
      💬
    </a>
  );
}
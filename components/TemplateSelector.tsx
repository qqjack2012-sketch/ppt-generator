import { TemplateOption } from '../types';

const templates: TemplateOption[] = [
  { id: 'classic', name: '经典风格', thumbnail: '/templates/classic.png' },
  { id: 'modern', name: '现代简约', thumbnail: '/templates/modern.png' },
  { id: 'business', name: '商务专业', thumbnail: '/templates/business.png' },
];

interface Props {
  selected: TemplateOption | null;
  onSelect: (template: TemplateOption) => void;
}

export default function TemplateSelector({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {templates.map((tpl) => (
        <div
          key={tpl.id}
          onClick={() => onSelect(tpl)}
          className={`cursor-pointer rounded-lg border-2 transition shadow-sm hover:shadow-md hover:scale-[1.02] duration-200 ${
            selected?.id === tpl.id
              ? 'border-blue-500'
              : 'border-gray-200'
          }`}
        >
          <img
            src={tpl.thumbnail}
            alt={tpl.name}
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <div className="p-3 text-center font-medium text-gray-700">
            {tpl.name}
          </div>
        </div>
      ))}
    </div>
  );
}

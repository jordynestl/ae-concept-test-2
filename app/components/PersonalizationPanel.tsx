
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tag, PlusSquare, X } from 'lucide-react';
import { getDefaultPersonalizationTokens } from '../utils/survey-utils';

interface PersonalizationPanelProps {
  personalizationFields: Record<string, string[]>;
  onAddToken: (token: string) => void;
  onUpdateFields: (fields: Record<string, string[]>) => void;
}

export const PersonalizationPanel: React.FC<PersonalizationPanelProps> = ({
  personalizationFields,
  onAddToken,
  onUpdateFields
}) => {
  const [customTokenName, setCustomTokenName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  
  const handleAddCustomToken = () => {
    if (!customTokenName.trim()) return;
    
    onAddToken(`{{${customTokenName.trim()}}}`);
    setCustomTokenName('');
  };
  
  const handleAddCategory = () => {
    if (!categoryName.trim()) return;
    
    onUpdateFields({
      ...personalizationFields,
      [categoryName.trim()]: []
    });
    
    setCategoryName('');
  };
  
  const handleAddField = (category: string, field: string) => {
    if (!field.trim()) return;
    
    const updatedFields = { ...personalizationFields };
    if (!updatedFields[category]) {
      updatedFields[category] = [];
    }
    
    updatedFields[category] = [...updatedFields[category], field.trim()];
    onUpdateFields(updatedFields);
  };
  
  const handleRemoveField = (category: string, fieldIndex: number) => {
    const updatedFields = { ...personalizationFields };
    updatedFields[category] = updatedFields[category].filter((_, index) => index !== fieldIndex);
    
    if (updatedFields[category].length === 0) {
      delete updatedFields[category];
    }
    
    onUpdateFields(updatedFields);
  };
  
  const handleRemoveCategory = (category: string) => {
    const updatedFields = { ...personalizationFields };
    delete updatedFields[category];
    onUpdateFields(updatedFields);
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Tag size={20} />
        <h3>Personalization Tokens</h3>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-2">
          Use personalization tokens to dynamically insert data into your survey. Add tokens like &#123;&#123;firstName&#125;&#125; to customize messages.
        </p>
        
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">
              &#123;&#123;
            </div>
            <Input
              value={customTokenName}
              onChange={(e) => setCustomTokenName(e.target.value)}
              placeholder="tokenName"
              className="pl-7 pr-2"
            />
          </div>
          <Button onClick={handleAddCustomToken}>Insert</Button>
        </div>
      </div>
      
      <div className="mb-2">
        <h4 className="mb-1">Token Categories</h4>
        <p className="text-sm text-muted-foreground mb-3">
          Organize personalization tokens by category. Add fields to each category.
        </p>
      </div>
      
      <div className="space-y-4">
        {Object.entries(personalizationFields).map(([category, fields]) => (
          <div key={category} className="border rounded p-3">
            <div className="flex justify-between items-center mb-2">
              <h4>{category}</h4>
              <Button variant="ghost" size="sm" onClick={() => handleRemoveCategory(category)}>
                <X size={16} />
              </Button>
            </div>
            
            <div className="space-y-2 mb-3">
              {fields.map((field, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="flex-1 p-1 border rounded bg-muted/30 cursor-pointer hover:bg-accent"
                    onClick={() => onAddToken(`{{${category}.${field}}}`)}
                  >
                    {field}
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveField(category, index)}>
                    <X size={14} />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input placeholder="Add field" className="text-sm" 
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddField(category, e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
              <Button variant="outline" size="sm"
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  handleAddField(category, input.value);
                  input.value = '';
                }}
              >
                Add
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex gap-2">
        <Input 
          placeholder="New category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <Button variant="outline" onClick={handleAddCategory}>
          <PlusSquare size={16} className="mr-1" /> Add Category
        </Button>
      </div>
      
      <div className="mt-4">
        <Button variant="secondary" onClick={() => onUpdateFields({
          ...personalizationFields,
          ...getDefaultPersonalizationTokens()
        })}>
          Add Default Categories
        </Button>
      </div>
    </div>
  );
};

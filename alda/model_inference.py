from transformers import AutoTokenizer, AutoModelForCausalLM
import sys
import json

# Load model and tokenizer
tokenizer = AutoTokenizer.from_pretrained('your-model-name')  # Replace with your model path or name
model = AutoModelForCausalLM.from_pretrained('lawscribe_model.pth')

def generate_summary(text):
    inputs = tokenizer(text, return_tensors='pt')
    outputs = model.generate(**inputs, max_new_tokens=64, use_cache=True)
    summary = tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]
    return summary

if __name__ == "__main__":
    input_text = sys.stdin.read()
    summary = generate_summary(input_text)
    print(json.dumps({"summary": summary}))

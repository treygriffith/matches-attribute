
build: components index.js
				@component build --dev

components: component.json
				@component install --dev

clean:
				rm -fr build components template.js dist

test: build
				component-test phantom

.PHONY: clean matches-attribute test

import React from "react";

const StoreContext = React.createContext(null)
/*
            <StoreContext.provider value={store}>
               <родительский компонент! все его дети могут получить store без прокидывания пропсов>
                        <дети>
                            <дети>
                                <дети>
                                    <StoreContext.consumer>
                                    { (store) => {
                                        этот элемент получит контекст
                                            каждый из детей в StoreContext.provider может добавить еще контекст
                                            }
                                        }

                                    </StoreContext.consumer>
                                </дети>
                            </дети>
                        </дети>
               </родительский компонент>
            </StoreContext.provider>
 */



/*
в react-redux есть такой же покомпонент который все это делает оборачиваем в  Provider родительский компонент
а потом создаем connect(f1,f2...)(obj) который передаст контекст в obj
*/